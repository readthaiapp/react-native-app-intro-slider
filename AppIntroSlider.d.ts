declare module "react-native-app-intro-slider" {
  import * as React from "react";
  import * as ReactNative from "react-native";

  export interface AppIntroSliderProps {
    activeDotStyle?: {
      backgroundColor?: string;
    };
    dotStyle?: {
      backgroundColor?: string;
    };
    skipLabel?: string;
    doneLabel?: string;
    nextLabel?: string;
    prevLabel?: string;
    buttonStyle?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
    buttonTextStyle?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>;
    slides: Array<any>;
    bottomButton?: boolean;
  }

  export default class AppIntroSlider extends React.Component<
    AppIntroSliderProps,
    any
  > {
    render(): JSX.Element;
    goToSlide: (pageNum: any) => void;
    _onNextPress: () => void;
    _onPrevPress: () => void;
    _renderItem: (item: any) => () => React.ReactElement<any>;
    _renderButton: (name: any, onPress: any) => boolean;
    _renderDefaultButton: (name: any) => boolean;
    _renderOuterButton: (content: any, name: any, onPress: any) => boolean;
    _renderNextButton: () => boolean;
    _renderPrevButton: () => boolean;
    _renderDoneButton: () => boolean;
    _renderSkipButton: () => boolean;
    _renderPagination: () => boolean;
    onDone: () => void;
    onSkip: () => void;
  }
}
