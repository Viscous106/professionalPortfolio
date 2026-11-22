import {
  TbReceipt, TbLock, TbId, TbTools, TbRefresh, TbSparkles, TbTerminal2, TbPlugConnected, TbDatabase, TbTarget,
  TbGauge, TbRepeatOff, TbAppWindow, TbCpu, TbDeviceMobile, TbRobot, TbFileCode, TbServer2,
} from 'react-icons/tb';
import type { IconName } from '@/lib/types';

const ICONS: Record<IconName, typeof TbReceipt> = {
  receipt: TbReceipt,
  escrow: TbLock,
  identity: TbId,
  tools: TbTools,
  sync: TbRefresh,
  spark: TbSparkles,
  cli: TbTerminal2,
  flow: TbPlugConnected,
  memory: TbDatabase,
  goal: TbTarget,
  budget: TbGauge,
  loop: TbRepeatOff,
  window: TbAppWindow,
  chip: TbCpu,
  link: TbDeviceMobile,
  agents: TbRobot,
  contract: TbFileCode,
  server: TbServer2,
};

export function Icon({ name, size = 16, className }: { name: IconName; size?: number; className?: string }) {
  const C = ICONS[name];
  return <C size={size} className={className} aria-hidden />;
}
