import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { Card, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SelectSeatsScreen = () => {
  const [platinumSeats, setPlatinumSeats] = useState(0);
  const [goldSeats, setGoldSeats] = useState(0);

  const handleSeatChange = (type, action) => {
    if (type === 'platinum') {
      if (action === 'increase') {
        setPlatinumSeats(platinumSeats + 1);
      } else if (action === 'decrease' && platinumSeats > 0) {
        setPlatinumSeats(platinumSeats - 1);
      }
    } else if (type === 'gold') {
      if (action === 'increase') {
        setGoldSeats(goldSeats + 1);
      } else if (action === 'decrease' && goldSeats > 0) {
        setGoldSeats(goldSeats - 1);
      }
    }
  };


  return (

    <View style={styles.container}>
      <Text style={styles.title}>Select Seats</Text>

      <Card style={styles.seatCategoryCard}>
        <Text style={styles.seatCategoryTitle}>Stage</Text>
        <View style={styles.seatCategoryList}>
          <Text style={[styles.seatText, { backgroundColor: '#C7A6FF' }]}>
            Platinum Class ₹ 1,480
          </Text>
          <Text style={[styles.seatText, { backgroundColor: '#F2C5A0' }]}>
            Gold Class ₹ 800
          </Text>
          <Text style={[styles.seatText, { backgroundColor: '#C9C9C9' }]}>
            Silver Class ₹ 480
          </Text>
        </View>
      </Card>
      <Text style={styles.seatCategoryTitle}>Seats Layout</Text>
      <View style={styles.layoutCard}>
        <Divider />
        <View style={styles.seatRow}>
          <Icon name="seat" size={24} color="#C7A6FF" />
          <Text style={styles.seatRowText}>Platinum Class ₹ 1,480 8 seats left</Text>
          <View style={styles.seatCounter}>
            <Button onPress={() => handleSeatChange('platinum', 'decrease')}>-</Button>
            <TextInput
              value={platinumSeats.toString()}
              style={styles.input}
              editable={false}
            />
            <Button onPress={() => handleSeatChange('platinum', 'increase')}>+</Button>
          </View>
        </View>
        <Divider />
        <View style={styles.seatRow}>
          <Icon name="seat" size={24} color="#F2C5A0" />
          <Text style={styles.seatRowText}>Gold Class ₹ 800 5 seats left</Text>
          <View style={styles.seatCounter}>
            <Button onPress={() => handleSeatChange('gold', 'decrease')}>-</Button>
            <TextInput
              value={goldSeats.toString()}
              style={styles.input}
              editable={false}
            />
            <Button onPress={() => handleSeatChange('gold', 'increase')}>+</Button>
          </View>
        </View>

        <Divider />
        <View style={styles.seatRow}>
          <Icon name="seat" size={24} color="#C7A6FF" />
          <Text style={styles.seatRowText}>Platinum Class ₹ 1,480 3 seats left</Text>
          <View style={styles.seatCounter}>
            <Button onPress={() => handleSeatChange('platinum', 'decrease')}>-</Button>
            <TextInput
              value={platinumSeats.toString()}
              style={styles.input}
              editable={false}
            />
            <Button onPress={() => handleSeatChange('platinum', 'increase')}>+</Button>
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.paymentCard}>
        <View>
          <Text style={styles.paymentText}>
            <Text style={{ color: '#7e2ccf', }}>₹1,480</Text>
            {' for 1 seat'}
          </Text>

          <Text style={styles.paymentText}>+199 tax & fees</Text>
        </View>
        <Button mode="contained" style={styles.payButton}>Pay Now</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  seatCategoryCard: {
    marginBottom: 16,
    backgroundColor: 'white'
  },
  seatCategoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  seatCategoryList: {
    paddingVertical: 8,
  },
  seatText: {
    fontSize: 16,
    padding: 8,
    color: '#FFFFFF',
    marginBottom: 8,
    borderRadius: 8,
  },
  layoutCard: {
    marginBottom: 16,
  },
  seatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  seatRowText: {
    flex: 1,
    fontSize: 14,
    marginLeft: 5,
  },
  seatCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0,
  },
  paymentCard: {
    paddingVertical: Dimensions.get('window').height * 0.22,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  paymentText: {
    fontSize: 18,
  },
  payButton: {
    marginTop: 16,
    backgroundColor: '#7e2ccf',
  },
});

export default SelectSeatsScreen;