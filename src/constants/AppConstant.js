import AppName from './AppName';
import {LoginSreen} from '../screens';
import {
  DeliveryScreen,
  HistoryScreen,
  SettingScreen,
  NotificationScreen,
} from '../screens/home';

const TabScreen = {
  [AppName.Delivery]: DeliveryScreen,
  [AppName.History]: HistoryScreen,
  [AppName.Setting]: SettingScreen,
  [AppName.Notification]: NotificationScreen,
};

const StackScreen = {
  [AppName.Login]: LoginSreen,
};

export default AppName;

export {TabScreen, StackScreen};
