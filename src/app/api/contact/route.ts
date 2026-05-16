import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, correo, empresa, mensaje } = body;

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { success: false, message: "Nombre, correo y mensaje son requeridos" },
        { status: 400 }
      );
    }

    if (nombre.length > 100 || mensaje.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Nombre o mensaje demasiado largo" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { success: false, message: "Correo electrónico no válido" },
        { status: 400 }
      );
    }

    await pool.query(
      `INSERT INTO contacts (nombre, correo, empresa, mensaje, created_at, updated_at)
       VALUES ($1, $2, $3, $4, NOW(), NOW())`,
      [nombre, correo, empresa || null, mensaje]
    );

    return NextResponse.json({
      success: true,
      message: "¡Mensaje enviado correctamente! Te contactaremos pronto.",
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { success: false, message: "Error del servidor. Por favor intenta nuevamente." },
      { status: 500 }
    );
  }
}
