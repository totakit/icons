import { SVGProps, Ref } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  ref?: Ref<SVGSVGElement>;
}
declare const Icon: import('react').ForwardRefExoticComponent<IconProps>;
export default Icon;
