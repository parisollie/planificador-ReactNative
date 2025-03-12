import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'


const ControlPresupuesto = ({presupuesto,gastos,resetearApp}) => {
    
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    //Vid 149
    const [ porcentaje, setPorcentaje ] = useState(0)

    //Vid 124
    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => Number(gasto.cantidad) + total, 0 )
        //Vid 124,Calcular lo disponible 
        const totalDisponible = presupuesto - totalGastado
        //Vid 149
        const nuevoPorcentaje = (
            ((presupuesto - totalDisponible) / presupuesto) * 100
        )
        //Vid 149
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000);
        //Vid 124, lo colocamos
        setGastado(totalGastado)
        setDisponible(totalDisponible)
        //Vid 140 [gastos]
    }, [gastos])
  
    return (
        <View style={styles.contenedor}>
            <View style={styles.centrarGrafica}>
                <CircularProgress
                    value={ porcentaje }
                    //Vid 148
                    duration={1000}
                    radius={150}
                    valueSuffix={'%'}
                    title='Gastado'
                    inActiveStrokeColor='#F5F5F5'
                    inActiveStrokeWidth={20}
                    activeStrokeColor='#3b82f6'
                    activeStrokeWidth={20}
                    titleStyle={{ fontWeight: 'bold', fontSize: 20}}
                    titleColor='#64748B'
                />
            </View>

            <View style={styles.contenedorTexto}>
                <Pressable
                    onLongPress={resetearApp}
                    style={styles.boton}
                >
                    <Text style={styles.textoBoton}>Reiniciar App</Text>
                </Pressable>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Presupuesto: {''} </Text>
                    {formatearCantidad(presupuesto)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Disponible: {''}</Text>
                    {formatearCantidad(disponible)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Gastado: {''}</Text>
                    {formatearCantidad(gastado)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        //jeje
        ...globalStyles.contenedor,
        
    },
    centrarGrafica: {
        alignItems: 'center'
    },
    imagen:{
        width:250,
        height:250
    } ,
    boton: {
        backgroundColor: '#3B82F6',
        padding: 10,
        marginBottom: 40,
        borderRadius: 5
    },
    textoBoton: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    contenedorTexto: {
       
        marginTop: 50,
    },
    valor: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10
    },
    label: {
        fontWeight: '700',
        color: '#3B82F6'
    }
})

export default ControlPresupuesto