import React, {FC, useState} from 'react';
import {FlagIcon} from '../../assets/icons';
import {Image, View, TouchableOpacity} from 'react-native';
import {SpeedDialProps} from './intefaces.ts';
import {useBoolean} from '../../hooks';
import styles from './styles.ts';

const SpeedDial: FC<SpeedDialProps> = ({
  data,
  numberSelected,
  left = false,
  onPress,
}) => {
  const [open, setOpen] = useBoolean(false);
  const [optionSelected, setOptionSelected] = useState<number>(numberSelected);
  const handlePress = (index: number) => {
    setOptionSelected(index);
    setOpen.off();
    onPress(data[index].key);
  };

  console.log(numberSelected, optionSelected, data, data[numberSelected]);

  return (
    <View>
      <TouchableOpacity
        style={[styles.speedDial, left && styles.left]}
        onPress={() => setOpen.toggle()}>
        {open || (!optionSelected && optionSelected !== 0) ? (
          <FlagIcon />
        ) : (
          <Image
            source={data[optionSelected]?.image}
            style={styles.actionIcon}
          />
        )}
      </TouchableOpacity>

      {open && (
        <View style={[styles.actionsContainer, left && styles.left]}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.actionButton,
                optionSelected === index && styles.actionSelected,
              ]}
              onPress={() => handlePress(index)}>
              <Image source={item.image} style={styles.actionIcon} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SpeedDial;
