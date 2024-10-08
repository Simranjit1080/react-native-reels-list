import { AVPlaybackStatus } from "expo-av";
import { ReactNode } from "react";
import { FlatListProps } from "react-native";

export type VideoItemType = {
  source: string;
  thumbnail: string;
  key: string;
  [key: string]: any;
};

export type OverlayComponentType = ({
  item,
  index,
}: {
  item: VideoItemType;
  index: number;
}) => ReactNode;

export type OnCurrentPlaybackStatusUpdateType = (
  status: AVPlaybackStatus
) => void;

export type ReelsListProps = {
  currentVideoIndex: number;
  initialVideoIndex?: number;
  handleGetItemLayout: FlatListProps<VideoItemType>["getItemLayout"];
  onViewableItemsChanged: FlatListProps<VideoItemType>["onViewableItemsChanged"];
  videos: VideoItemType[];
  videoHeight: number;
  isMuted?: boolean;
  handleMuteToggle?: () => void;
  showSeekbar?: boolean;
  showLoadingIndicator?: boolean;
  useNativeControls?: boolean;
  overlayComponent?: OverlayComponentType;
  onCurrentPlaybackStatusUpdate?: OnCurrentPlaybackStatusUpdateType;
  holdToPause?: boolean;
  bottomOffset?: number;
} & Omit<FlatListProps<VideoItemType>, "renderItem" | "data">;

export type VideoPlayerHandler = {
  pause: () => Promise<void>;
  unload: () => Promise<void>;
  status: AVPlaybackStatus | undefined;
};

export type VideoPlayerItemProps = {
  videoDetails: VideoItemType;
  index: number;
  currentVideoIndex: number;
  videoHeight: number;
  isMuted?: boolean;
  handleMuteToggle?: () => void;
  showSeekbar?: boolean;
  showLoadingIndicator?: boolean;
  useNativeControls?: boolean;
  overlayComponent?: OverlayComponentType;
  onCurrentPlaybackStatusUpdate?: OnCurrentPlaybackStatusUpdateType;
  holdToPause?: boolean;
  bottomOffset?: number;
};

export type VideoControlsProps = {
  positionMillis: number;
  durationMillis: number;
  setPosition: (position: number) => void;
};
