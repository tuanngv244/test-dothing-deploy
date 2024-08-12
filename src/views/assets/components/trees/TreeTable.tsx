import { dataTrees } from "@/domains/mocks/dataTree";
import { File } from "@/domains/models/File";
import { Folder } from "@/domains/models/Folder";
import React from "react";

const ItemRow = ({
  row,
  level = 1,
  setTags,
  tags,
  cates,
}: {
  row: File | Folder;
  level: number;
  setTags?: Function;
  tags: Array<any>;
  cates: string;
}) => {
  let newLevel = level;
  let newCats = cates;
  const [visible, setVisible] = React.useState(false);

  const newTags = React.useMemo(() => {
    return newCats?.split(">") || [];
  }, [newCats]);

  const handleClickTr = () => {
    setTags && setTags(newTags);
    setVisible(!visible);
  };
  const handleClickDetail = ({
    level,
    row,
  }: {
    level: number;
    row: File | Folder;
  }) => {
    setTags && setTags(newTags);
    // open modal
  };

  if (row.children && row.children.length) {
    return (
      <>
        <tr
          className="tr"
          style={{ backgroundColor: "#eee" }}
          onClick={() => handleClickTr()}
        >
          <td style={{ paddingLeft: newLevel === 1 ? 5 : newLevel * 15 }}>
            <div
              style={{ display: "flex", alignItems: "center", lineHeight: 1 }}
            >
              {visible ? (
                <span style={{ fontSize: 20, paddingRight: 5 }}>-</span>
              ) : (
                <span style={{ fontSize: 20, paddingRight: 5 }}>+</span>
              )}
              <span>{row.name}</span>
            </div>
          </td>
          <td>{row.category}</td>
          <td>{row.date}</td>
          <td>{row.size}</td>
        </tr>
        {row.children.map((item: Folder | File) => {
          return visible ? (
            <ItemRow
              tags={tags}
              row={item}
              key={item.id}
              level={newLevel + 1}
              setTags={setTags}
              cates={newCats + '>' + item.name}
            />
          ) : null;
        })}
      </>
    );
  }

  return (
    <tr className="tr" onClick={() => handleClickDetail({level, row})}>
      <td>{row.name}</td>
      <td>{row.category}</td>
      <td>{row.date}</td>
      <td>{row.size}</td>
    </tr>
  );
};

const TreeTable = () => {
  const [tags, setTags] = React.useState<any>([]);
  const [name, setName] = React.useState("");

  return (
    <div className="content">
      <div className="header">
        <span>{name}</span>
        {tags.map((tag: any, index: number) => {
          return <span key={index}>{tag}</span>;
        })}
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Date</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {dataTrees.map((item: File | Folder) => {
            return <ItemRow key={item.id} row={item} level={1} setTags={setTags} tags={tags} cates={`${item.name}`} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TreeTable;
