import {
  FaBeer,
  FaGlassCheers,
  FaGlassMartini,
  FaGlassMartiniAlt,
  FaGlassWhiskey,
} from "react-icons/fa";
import { MdLocalBar, MdStorefront, MdWineBar } from "react-icons/md";

export const categories = [
  {
    label: "All",
    icon: MdStorefront,
  },
  {
    label: "Whiskey",
    icon: FaGlassWhiskey,
  },
  {
    label: "Wine",
    icon: FaGlassCheers,
  },
  {
    label: "Beer",
    icon: FaBeer,
  },
  {
    label: "Vodka",
    icon: FaGlassMartini,
  },
  {
    label: "Rum",
    icon: MdLocalBar,
  },
  {
    label: "Tequila",
    icon: FaGlassMartiniAlt,
  },
];
