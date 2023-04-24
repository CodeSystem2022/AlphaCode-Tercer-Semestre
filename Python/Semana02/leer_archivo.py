
archivo = open('prueba.txt', 'r', encoding='utf8') # las letras son: 'r' read, 'a' append, 'w' write, 'x'
#print(archivo.read())
#print(archivo.read(15))
#print(archivo.read(10)) # Continuamos desde la línea anterior
#print(archivo.readline())
#print(archivo.readline())

# vamos a iterar el archivo, cada una de las líneas
# for linea in archivo:
    # print(linea) # iteramos todos los elementos del archivo
print(archivo.readlines()[11]) #accedemos al archivo como si fuera una lista
