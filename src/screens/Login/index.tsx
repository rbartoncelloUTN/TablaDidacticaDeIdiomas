import type {FormikErrors, FormikHelpers} from 'formik';
import {Field, Formik} from 'formik';
import {FC, useState} from 'react';
import {useRef} from 'react';
import {View} from 'react-native';
import {createStyles} from './styles';
import type {FormValues, LoginProps} from './types';
import validationSchema from './validationSchema';
import {Button, Container, LoadingOverlay, Text, Title} from '../../components';
import {useThemedStyles} from '../../hooks';
import {ErrorFeedback, PasswordField, TextField} from '../../forms/fields';
import {useSessionStore} from '../../state/session/slice.ts';
import {useLogin} from '../../state/session/actions.tsx';
import {users} from '../../constans/users.ts';
import BooleanButtons from '../../components/BooleanButtons';
import theme from '../../theme/base';
import {UserAccountIcon} from '../../assets/icons/index.ts';
import {MailIcon} from '../../assets/icons';

const initialValues: FormValues = {username: '', password: ''};

const Login: FC<LoginProps> = () => {
  const [styles] = useThemedStyles(createStyles);
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const {status} = useSessionStore();
  const {login} = useLogin();
  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    await login(values.username, values.password);
    actions.resetForm();
    actions.setStatus({isSubmitted: true});
  };

  const handleAutoComplete = async (
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<FormValues>>,
    id: number,
  ) => {
    const user = users[id];
    await setFieldValue('username', user.email, false);
    await setFieldValue('password', `${user.password}`, false);
    setUserId(id);
  };

  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <Container
      style={{backgroundColor: '#37a92b'}}
      accessibilityLabel="view-login-container">
      {status.isFetching && <LoadingOverlay />}
      <Title style={styles.title}>Inicio de sessión</Title>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}>
        {({submitForm, dirty, status: state, setFieldValue}) => (
          <View style={styles.content}>
            <View style={styles.content}>
              <Field
                accessibilityLabel="txt-login-username"
                component={TextField}
                name="username"
                config={{
                  placeholder: 'Ingrese su correo electronico',
                  label: 'Correo electronico',
                  returnKeyType: 'next',
                  keyboardType: 'email-address',
                }}
                innerRef={usernameRef}
                nextInnerRef={passwordRef}
                leftIcon={
                  <MailIcon
                    color={theme.colors.brandSecondary}
                    width={25}
                    height={25}
                    style={styles.iconLeft}
                  />
                }
              />
              <Field
                accessibilityLabel="txt-login-password"
                component={PasswordField}
                name="password"
                config={{
                  placeholder: 'Ingrese contraseña',
                  label: 'Contraseña',
                }}
                innerRef={passwordRef}
                leftIcon={
                  <UserAccountIcon
                    color={theme.colors.brandSecondary}
                    width={25}
                    height={25}
                    style={styles.iconLeft}
                  />
                }
              />
            </View>
            {!dirty && state?.isSubmitted && status.errorMessage && (
              <ErrorFeedback config={{label: status.errorMessage}} />
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flex: 1,
              }}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={submitForm}
                  title="Ingresar"
                  accessibilityLabel="btn-login-submit"
                  buttonStyle={styles.button}
                  titleStyle={{
                    justifyContent: 'center',
                    width: '100%',
                  }}
                />
              </View>
              <View style={{width: '30%'}}>
                <BooleanButtons
                  options={users.map(user => (
                    <Text
                      key={user.id}
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {user.rol}
                    </Text>
                  ))}
                  label="Usuarios"
                  onChange={(value: number) =>
                    handleAutoComplete(setFieldValue, value)
                  }
                  value={userId}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default Login;

/*
* import * as React from "react";
import { value ButtonGroup } from "@rneui/base";

export default () => {
  const [
    selectedIndex,
    setSelectedIndex
  ] = React.useState(1);
  const [
    selectedIndexes,
    setSelectedIndexes
  ] = React.useState([]);
  return (
    <ButtonGroup
      buttonStyle={{ width: 100 }}
      buttonContainerStyle={{}}
      buttons={[
        "Hello",
        "World",
        "React",
        "Native",
        "Elements"
      ]}
      containerStyle={{}}
      disabledStyle={{}}
      disabledTextStyle={{}}
      disabledSelectedStyle={{}}
      disabledSelectedTextStyle={{}}
      innerBorderStyle={{}}
      onPress={selectedIdx =>
        setSelectedIndex(selectedIdx)
      }
      selectedButtonStyle={{}}
      selectedIndex={selectedIndex}
      selectedIndexes={selectedIndexes}
      selectedTextStyle={{}}
      textStyle={{}}
      vertical
    />
  );
}*/
