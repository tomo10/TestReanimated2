import Animated from 'react-native-reanimated';

declare let _WORKLET: boolean;

interface AnimationState {
  current: number;
}

interface PhysicsAnimationState extends AnimationState {
  velocity: number;
}

type Animation<
  State extends AnimationState = AnimationState,
  PrevState = State
> = {
  animation: (animation: State, now: number) => boolean;
  start: (
    animation: State,
    value: number,
    now: number,
    lastAnimated: PrevState,
  ) => void;
} & State;

type AnimationParameter<State extends AnimationState = AnimationState>
  | Animation<State>
  | (() => Animation<State>)
  | number;

// const animationParameter = <State extends AnimationState = AnimationState>