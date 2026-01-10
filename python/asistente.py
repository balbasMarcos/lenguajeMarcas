import sys
import os
import datetime




def entender(pregunta):
    pregunta = pregunta.lower()

    if any(p in pregunta for p in ["qué hora es", "hora actual", "dime la hora"]):
        return "hora"
    elif any(p in pregunta for p in ["cómo te llamas", "tu nombre", "quién eres"]):
        return "nombre"
    elif any(p in pregunta for p in ["qué puedes hacer", "ayuda", "funciones"]):
        return "ayuda"
    elif "salir" in pregunta:
        return "salir"
    else:
        return "desconocido"


import datetime

def responder(intencion):
    if intencion == "hora":
        ahora = datetime.datetime.now().strftime("%H:%M")
        return f"Claro, ahora son las {ahora}."
    elif intencion == "nombre":
        return "Me llamo PythonBot, tu asistente virtual."
    elif intencion == "ayuda":
        return "Puedo decirte la hora, responder preguntas simples y ayudarte a aprender Python."
    elif intencion == "salir":
        return "¡Hasta pronto! Fue un placer ayudarte."
    else:
        return "Mmm... no estoy seguro de cómo responder a eso, pero estoy aprendiendo."

def asistente_virtual():
    print("Hola, soy tu asistente. ¿En qué puedo ayudarte hoy?")

    while True:
        entrada = input("Tú: ")
        intencion = entender(entrada)
        respuesta = responder(intencion)
        print("Asistente:", respuesta)
        if intencion == "salir":
            break

asistente_virtual()


if __name__ =="__main__":
    asistente_virtual()
