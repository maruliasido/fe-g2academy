// import React, { Component } from 'react'
// import { View, StyleSheet } from 'react-native'

// export default class Calendar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeDate: new Date()
//         }
//     }
//     generateMatrix = () => {
//         let matrix = [];
//         matrix[0] = this.weekDays;
//         let year = this.state.activeDate.getFullYear();
//         let month = this.state.activeDate.getMonth();
//         let firstDay = new Date(year, month, 1).getDay();

//         let maxDays = this.nDays[month];
//         if (month == 1) { // February
//             if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//                 maxDays += 1;
//             }
//         }
//         let counter = 1;
//         for (let row = 1; row < 7; row++) {
//             matrix[row] = [];
//             for (let col = 0; col < 7; col++) {
//                 matrix[row][col] = -1;
//                 if (row == 1 && col >= firstDay) {
//                     // Fill in rows only after the first day of the month
//                     matrix[row][col] = counter++;
//                 } else if (row > 1 && counter <= maxDays) {
//                     // Fill in rows only if the counter's not greater than
//                     // the number of days in the month
//                     matrix[row][col] = counter++;
//                 }
//             }
//         }

//         return matrix;
//     }

//     render() {
//         let months = ["January", "February", "March", "April",
//             "May", "June", "July", "August", "September", "October",
//             "November", "December"];

//         let weekDays = [
//             "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
//         ];

//         let nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//         let matrix = this.generateMatrix();

        

//         return (
//             <View>
//                 <Text style={{
//                     fontWeight: 'bold',
//                     fontSize: 18,
//                     textAlign: 'center'
//                 }}>
//                     {this.months[this.state.activeDate.getMonth()]} &nbsp;
//                     {this.state.activeDate.getFullYear()}
//                 </Text>
//             </View>
//         )
//     }

// }

