import theme from '../../theme/base';
import colors from '../../theme/base/colors.ts';

export const createStyles = () => ({
  content: {
    flex: 1,
    minHeight: 240,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
    width: '50%',
  },
  button: {
    borderRadius: 10,
    backgroundColor: colors.brandPrimary,
    height: '100%',
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonAutoComplete: {
    backgroundColor: colors.brandSecondary,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    margin: 10,
    fontWeight: 'bold',
    color: '#1380d9',
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '100',
    color: '#333333',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.spacing.marginVertical * 2,
  },
});
