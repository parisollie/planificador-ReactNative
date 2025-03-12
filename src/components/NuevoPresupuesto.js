import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import globalStyles from '../styles'

//Vid 117 
const NuevoPresupuesto = ({ 
    //Vid 122
    presupuesto, 
    setPresupuesto, 
    handleNuevoPresupuesto 
}) => {

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Definir Presupuesto</Text>

            <TextInput
                //Vid 118 
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto: Ej. 300'
                style={styles.input}
                //Vid 119
                value={ presupuesto.toString() }
                onChangeText={setPresupuesto}
                
            />

            <Pressable
            //Vid 117 
                style={styles.boton}
                //Vid 119 
                onPress={() => handleNuevoPresupuesto(presupuesto)}
            >
                <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    label: {
        textAlign: 'center',
        fontSize: 24,
        color: '#3B82F6'
    },
    input: {
        backgroundColor: '#1048A4',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30,
       
    },
    boton: {
        marginTop: 30,
        backgroundColor: '#1048A4',
        padding: 10,
        borderRadius: 10
    },
    botonTexto: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})


export default NuevoPresupuesto
