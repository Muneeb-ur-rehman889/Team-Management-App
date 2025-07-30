import { View, Text, StyleSheet } from 'react-native';

function Apprecord({ data }) {
  const {
    type,
    date,
    time,
    amount,
    description,
    startDate,
    endDate,
    reason,
    status,
    workerName, // New: Show this if available
  } = data;

  let colors = {
    bgColor: '#86efac',
    textColor: '#16a34a',
    borderColor: '#86efac',
  };

  if (type === 'Early Leave') {
    colors = {
      bgColor: '#f87171',
      textColor: '#b91c1c',
      borderColor: '#f87171',
    };
  } else if (type === 'Early Payment') {
    colors = {
      bgColor: '#60a5fa',
      textColor: '#1d4ed8',
      borderColor: '#60a5fa',
    };
  } else if (type === 'Leave') {
    colors = {
      bgColor: '#fbbf24',
      textColor: '#92400e',
      borderColor: '#fbbf24',
    };
  }

  const statusStyles = {
    backgroundColor: status === 'accepted' ? '#bbf7d0' : '#fecaca',
    color: status === 'accepted' ? '#166534' : '#991b1b',
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card, { borderColor: colors.borderColor }]}>
        {/* Header row with type + status */}
        <View style={styles.headerRow}>
          <View style={[styles.badge, { backgroundColor: colors.bgColor }]}>
            <Text style={[styles.badgeText, { color: colors.textColor }]}>{type}</Text>
          </View>
          {status && (
            <View style={[styles.statusBadge, { backgroundColor: statusStyles.backgroundColor }]}>
              <Text style={[styles.statusText, { color: statusStyles.color }]}>
                {status.toUpperCase()}
              </Text>
            </View>
          )}
        </View>

        {/* Optional: Show worker name */}
        {workerName && (
          <Text style={styles.workerName}>By: {workerName}</Text>
        )}

        {/* Date and Time */}
        {(date || time) && (
          <View style={styles.row}>
            {date && <Text style={styles.date}>{date}</Text>}
            {time && <Text style={styles.time}>{time}</Text>}
          </View>
        )}

        {/* Leave-specific info */}
        {type === 'Leave' && (
          <View style={styles.leaveBox}>
            <Text style={styles.leaveText}>Start: {startDate}</Text>
            <Text style={styles.leaveText}>End: {endDate}</Text>
            {reason && <Text style={styles.leaveText}>Reason: {reason}</Text>}
          </View>
        )}

        {/* Description */}
        {description && type !== 'Leave' && (
          <View style={styles.descBox}>
            <Text style={styles.description}>{description}</Text>
          </View>
        )}

        {/* Amount */}
        {amount && (
          <View style={styles.amountBox}>
            <Text style={styles.amount}>{amount}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  card: {
    borderWidth: 2,
    borderRadius: 16,
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    borderRadius: 8,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusBadge: {
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  workerName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#4b5563', // gray-700
  },
  row: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  date: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  time: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  descBox: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  description: {
    fontSize: 16,
  },
  amountBox: {
    paddingHorizontal: 8,
    marginTop: 8,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  leaveBox: {
    paddingTop: 12,
    paddingHorizontal: 8,
  },
  leaveText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Apprecord;
