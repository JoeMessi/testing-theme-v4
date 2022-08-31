import { ElementType } from "react";

import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import Add from "@mui/icons-material/Add";
import Alarm from "@mui/icons-material/Alarm";
import Apple from "@mui/icons-material/Apple";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Check from "@mui/icons-material/Check";
import Download from "@mui/icons-material/Download";

export type SvgIconsMapInterface = {
  [key in SvgIconNames]: ElementType;
};

export const SvgIconsMap: SvgIconsMapInterface = {
  AccessibilityNew,
  Add,
  Alarm,
  Apple,
  ArrowRight,
  Check,
  Download,
};

export type SvgIconNames =
  | "AccessibilityNew"
  | "Add"
  | "Alarm"
  | "Apple"
  | "ArrowRight"
  | "Check"
  | "Download";
