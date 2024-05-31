import { Card, Col, Form, Row, Divider, Typography, Flex, Input } from "antd";
import * as React from "react";
import DataGrid, {
  columnTypes,
  paginationTypes,
  selectionTypes,
} from "../../Components/DataGrid/index.jsx";
import { Filter, filterType } from "../../Components/Fillter/index.jsx";
import ToolBar, {
  toolBarButtonTypes,
} from "../../Components/ToolbarButton/index.js";
import { basicRenderColumns } from "../../utils/dataTable.utils.js";
import Content from "../../Components/Layout/Content.jsx";

const { Search } = Input;

const GroupUser = () => {
  const onFocus = () => {};
  const gridRef = React.createRef();
  const [rows, setRows] = React.useState([]);
  const [form] = Form.useForm();

  const buttonConfirm = () => {}; // Action cua cac button
  const handleLoadData = () => {}; // xu ly nap ddu lieu
  const handleExport = () => {}; // xu ly xuat excel

  const columns = basicRenderColumns([
    {
      key: "ID",
      name: "ID",
      width: 180,
      visible: true,
    },
    {
      key: "STT",
      name: "STT",
      width: 120,
      type: columnTypes.TextEditor,
      editable: true,
    },
    {
      key: "GroupUser",
      name: "Tên nhóm",
      width: 722,
      type: columnTypes.TextEditor,
    },
    {
      key: "Code",
      name: "Mô tả",
      width: 722,
      type: columnTypes.TextEditor,
    },
  ]);

  return (
    <Content type={"1-column"} title={"NHÓM NGƯỜI DÙNG"}>
      <Flex
        align="center"
        justify="space-between"
        style={{ padding: "10px 20px" }}
      >
        <Search
          placeholder="Tìm kiếm"
          className="HeaderSearch"
          style={{ width: "20%" }}
        ></Search>
        <ToolBar
          buttonConfig={[
            toolBarButtonTypes.add,
            toolBarButtonTypes.delete,
            toolBarButtonTypes.save,
          ]}
          handleConfirm={buttonConfirm}
        />
      </Flex>
      <DataGrid
        ref={gridRef}
        direction="ltr"
        columnKeySelected="ID"
        selection={selectionTypes.multi}
        columns={columns}
        rows={rows}
        setRows={setRows}
        onFocus={onFocus}
        pagination={paginationTypes.scroll}
        limit={5}
      />
    </Content>
  );
};

export default GroupUser;
