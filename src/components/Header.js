import React from 'react'
import {
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'

//V-116, paso 1.0 , creamos el header
const Header = () => {
    return (
        <SafeAreaView>
            <Text style={styles.texto}>Planificador de Gastos</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    texto: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingTop: 20
    }
})

export default Header
