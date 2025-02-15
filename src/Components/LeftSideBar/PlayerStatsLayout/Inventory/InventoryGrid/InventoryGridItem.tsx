import EmptyCell from "./EmptyCell";
import InventoryMoneyItem from "./InventoryMoneyItem";
import InventoryTreasureItem from "./InventoryTreasureItem";
import InventoryMineralItem from "./InventoryMineralItem";
import { InventoryItem } from "GameConstants/Interfaces";

type GridItemProps = {
  item: InventoryItem | undefined;
};

// Draw inventory tile based on item type
export default function InventoryGridItem(props: GridItemProps) {
  const { item } = props;

  if (!item) return <EmptyCell />;
  else if (item.type === "money") return <InventoryMoneyItem {...item} />;
  else if (item.type === "mineral") return <InventoryMineralItem {...item} />;
  else if (item.type === "treasure") return <InventoryTreasureItem {...item} />;

  return <EmptyCell />;
}
