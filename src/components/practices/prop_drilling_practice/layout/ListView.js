import React from "react";
import { FlatList } from "react-native";
import ListCellView from "./ListCellView";

const ListView = props => {
    return (
        <FlatList data={[{}, {}, {}, {}, {}]} renderItem={ ({ item, index }) => {
            return (
                <ListCellView item={item} />
            );
        }}

        />
    );
}
export default ListView;