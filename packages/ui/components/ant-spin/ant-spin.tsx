import { Spin } from "antd";
import type { AntSpinProps } from "./types";

export default function AntSpin(params: AntSpinProps) {
  return <Spin {...params} />;
}
