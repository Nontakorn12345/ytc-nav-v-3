import { GoogleGenAI } from "@google/genai";
import { BUILDINGS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartAdvice = async (from: string, to: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `คุณคือผู้เชี่ยวชาญการนำทางในวิทยาลัยเทคนิคยโสธร (YTC). 
      ให้คำแนะนำสั้นๆ กระชับ และเป็นมิตร สำหรับการเดินทางจาก "${from}" ไปยัง "${to}". 
      เน้นจุดสังเกตที่สำคัญ และใช้เวลาเดินประมาณกี่นาที. 
      (ตอบเป็นภาษาไทยไม่เกิน 2 ประโยค)`,
    });
    return response.text || "เดินตามทางเดินหลักไปได้เลยครับ จุดหมายอยู่ไม่ไกล";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "เดินตรงไปตามทางเชื่อมอาคาร จะพบจุดหมายอยู่ทางด้านหน้าครับ";
  }
};

export const askCollegeAI = async (userMessage: string) => {
  const buildingContext = BUILDINGS.map(b => `${b.name}: ${b.description} มีห้อง ${b.rooms.join(', ')}`).join('\n');
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `คุณคือ "พี่โรบอต" ผู้ช่วยประจำวิทยาลัยเทคนิคยโสธร. 
        ข้อมูลวิทยาลัย: ${buildingContext}
        หน้าที่ของคุณคือตอบคำถามเกี่ยวกับอาคาร แผนก และการเรียนใน YTC อย่างสุภาพและสนุกสนาน. 
        ถ้าถามเรื่องทาง ให้บอกชื่อตึกที่เกี่ยวข้อง.`
      }
    });
    return response.text;
  } catch (error) {
    return "ขออภัยครับ พี่โรบอตขอไปเช็คข้อมูลสักครู่ ลองถามใหม่อีกครั้งนะ!";
  }
};