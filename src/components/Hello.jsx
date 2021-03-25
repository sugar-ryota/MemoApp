import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {/* ${childeren}で変数を扱うことができる */}
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

// 変数の型を宣言している(eslintではエラーになる)
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

// デフォルト値を決めている
Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
