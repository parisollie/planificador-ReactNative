import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Gasto from './Gasto'

const ListadoGastos = ({
    gastos, 
    setModal, 
    setGasto,
    //Vid 153 
    filtro, 
    gastosFiltrados
}) => {
  return (
    <View style={styles.contenedor}>
        <Text style={styles.titulo}>Gastos</Text>

        { filtro ? gastosFiltrados.map( gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    setModal={setModal}
                    setGasto={setGasto}
                />
        )) : gastos.map(gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
                setModal={setModal}
                //Vid 141
                setGasto={setGasto}
            />
        )) }

        
        {(gastos.length === 0 || (gastosFiltrados.length === 0 && !!filtro) )  &&  (
            <Text style={styles.noGastos}>No Hay Gastos</Text>
        )}

    </View>
)
}

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 30,
        marginBottom: 100
    },
    titulo: {
        color: '#64748B',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 20
    },
    noGastos: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#204220'
    },
    colorLetra: {
        color: '#204220'
    },
})

export default ListadoGastos