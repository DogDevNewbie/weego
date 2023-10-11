import {View, Text, StyleSheet} from 'react-native';

const HistoryDashInfo = () => {
    return (
        <View>
            <View style = {styles.flexDirectionRow}>
                <View style = {styles.dashInfoContainer}>
                    <Text>Today</Text>
                    <Text style={styles.incomeText}>0.00</Text>
                </View>

                <View style = {styles.dashInfoContainer}>
                    <Text>This Week</Text>
                    <Text style={styles.incomeText}>0.00</Text>
                </View>

                <View style = {styles.dashInfoContainer}>
                    <Text>This Month</Text>
                    <Text style={styles.incomeText}>0.00</Text>
                </View>
            </View>

            <View style = {styles.flexDirectionRow}>
                <View style = {styles.dashInfoContainer}>
                    <Text>Yesterday</Text>
                    <Text style={styles.incomeText}>0.00</Text>
                </View>

                <View style = {styles.dashInfoContainer}>
                    <Text>Last Week</Text>
                    <Text style={styles.incomeText}>0.00</Text>
                </View>
                
                <View style = {styles.dashInfoContainer}>
                    <Text>Last Month</Text>
                    <Text style={styles.incomeText}>0.00</Text>
                </View>
            </View>

        </View>
    )
};


const styles = StyleSheet.create ({
    flexDirectionRow: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    dashInfoContainer: {
        flex: 2,
        alignItems: 'center',
        padding: 10,
        borderWidth: .5,
        borderColor: 'lightgray'
    },
    incomeText: {
        fontSize: 22,
        color: '#AC00FF',
        fontWeight: '600'
    }


});

export default HistoryDashInfo;