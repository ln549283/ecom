import React, {useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity} from 'react-native'
import { Text, Snackbar } from 'react-native-paper'
import { deductDailyCost } from '../redux/slices/user.slice';
import { useDispatch, useSelector } from 'react-redux'

const GameHour = () => {
    const date = useSelector((state) => state.user.date);
    const [displayInnerDate, setDisplayInnerDate] = useState(date);
    const [displayDate, setDisplayDate] = useState('');
    const [showInfo, setShowInfo] = useState(false);
    const [deductedAmount, setDeductedAmount] = useState(0);
    const [showSnackbar, setShowSnackbar] = useState(false);

    const expenseUser = useSelector((state) => state.user.expenses)

    const dispatch = useDispatch();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date(new Date(displayInnerDate).getTime() + 60000);
            setDisplayInnerDate(newDate);
            setDisplayDate(
                `${newDate.getHours().toString().padStart(2, '0')}:${newDate.getMinutes().toString().padStart(2, '0')}`
            );
            if(newDate.getMinutes().toString().padStart(2, '0') === '00'){
                dispatch(deductDailyCost());
                setDeductedAmount(expenseUser);
                setShowSnackbar(true);
            }   

        }, 200);
        return () => clearInterval(intervalId);
    }, [displayInnerDate]);

    const handleSnackbarDismiss = () => {
        setShowSnackbar(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timeText}
            >
                {displayDate}
            </Text>
            <Snackbar 
                visible={showSnackbar} 
                action={{
                    label: 'X',
                    onPress: () => {
                        // Do something
                    },
                }} 
                style={{flex:1, width:200}}
                onDismiss={handleSnackbarDismiss}
                duration={3000}>
                <Text style={{color:'white'}}>Montant déduit : {deductedAmount}$</Text>
            </Snackbar>  
                    
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      marginBottom: 10,
    },
    timeText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    infoContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',flex:1,
    },
    infoText: {
      fontSize: 16,
      marginRight: 5,
      color: '#fff',
    },
    deductedAmount: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
  });

export default GameHour
