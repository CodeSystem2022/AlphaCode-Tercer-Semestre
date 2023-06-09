import logging as log

# Llamamos una configuracion basica
log.basicConfig(level=log.DEBUG,
                format="%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s",
                datefmt="%I:%M:%S %p")

# Creamos un Formatter con el formato deseado
formatter = log.Formatter("%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s")

# Creamos el FileHandler y le asignamos el Formatter
file_handler = log.FileHandler("capa_datos.log")
file_handler.setFormatter(formatter)

