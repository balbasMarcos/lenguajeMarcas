import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import oracledb
import pandas as pd

def main():
    print("hola mundo")

    conn = oracledb.connect(
        user="alumno",
        password="alum2526",
        dsn="localhost:1521/XEPDB_M"
    )

    query = "SELECT * FROM alumno.precio_art"
    df = pd.read_sql(query, conn)
    conn.close()

    
    df['VALOR'] = pd.to_numeric(df['VALOR'], errors='coerce')
    df['FECHA'] = pd.to_datetime(df['FECHA'], format='%d/%m/%y', errors='coerce')

    print(df)
    print(df.dtypes)
    print(df.isna().sum())

    
    
    plt.figure(num="GRÁFICA",figsize=(10, 5), facecolor="#151A28")
    plt.plot(df['FECHA'], df['VALOR'], marker='o', linestyle='-', color='green',)
    plt.title("Evolución del precio en el tiempo", color="white")
    plt.xlabel("Fecha", color="white")
    plt.ylabel("Valor (€)",color="white")
    plt.grid(True)

    #fondo de los ejes
    plt.gca().set_facecolor("#151A28")
    plt.gca().xaxis.label.set_color("white")
    plt.gca().yaxis.label.set_color("white")
    #color label ejes
    plt.gca().tick_params(axis='x', colors='white')
    plt.gca().tick_params(axis='y', colors='white')


    #formato dd/mm/yy
    plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%d-%m-%y'))
    plt.gcf().autofmt_xdate()  # Rota las fechas automáticamente
    plt.tight_layout()
    plt.show()


if __name__ == "__main__":
    main()
