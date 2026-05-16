import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

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

    const { error } = await supabase.from("contacts").insert({
      nombre,
      correo,
      empresa: empresa || null,
      mensaje,
    });

    if (error) {
      console.error("Error saving contact:", error);
      return NextResponse.json(
        { success: false, message: "Error del servidor. Por favor intenta nuevamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "¡Mensaje enviado correctamente! Te contactaremos pronto.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Error del servidor. Por favor intenta nuevamente." },
      { status: 500 }
    );
  }
}
