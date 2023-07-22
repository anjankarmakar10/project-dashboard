import ImageButton from "../Buttons/ImageButton";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHead from "./TableHead";
import TableHeadData from "./TableHeadData";
import TableRow from "./TableRow";
import save from "@/assets/icon/save.svg";
const Table = () => {
  return (
    <table className="w-full min-w-[600px]  rounded-md font-normal">
      <TableHead>
        <TableHeadData>Table title</TableHeadData>
        <TableHeadData>Table title</TableHeadData>
        <TableHeadData>Table title</TableHeadData>
        <TableHeadData>Table title</TableHeadData>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableData>Table data</TableData>
          <TableData>Table data</TableData>
          <TableData>Table data</TableData>
          <TableData>
            <div className="flex items-center gap-2">
              <ImageButton
                color="white"
                bg="#1D4ED8"
                variant="fill"
                image={save}
                size="sm"
              >
                Edit
              </ImageButton>
              <ImageButton
                color="white"
                bg="#D97706"
                variant="fill"
                image={save}
                size="sm"
              >
                Delete
              </ImageButton>
            </div>
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>Table data</TableData>
          <TableData>Table data</TableData>
          <TableData>Table data</TableData>
          <TableData>
            <div className="flex items-center gap-2">
              <ImageButton
                color="white"
                bg="#1D4ED8"
                variant="fill"
                image={save}
                size="sm"
              >
                Edit
              </ImageButton>
              <ImageButton
                color="white"
                bg="#D97706"
                variant="fill"
                image={save}
                size="sm"
              >
                Delete
              </ImageButton>
            </div>
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>Table data</TableData>
          <TableData>Table data</TableData>
          <TableData>Table data</TableData>
          <TableData>
            <div className="flex items-center gap-2">
              <ImageButton
                color="white"
                bg="#1D4ED8"
                variant="fill"
                image={save}
                size="sm"
              >
                Edit
              </ImageButton>
              <ImageButton
                color="white"
                bg="#D97706"
                variant="fill"
                image={save}
                size="sm"
              >
                Delete
              </ImageButton>
            </div>
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>Table data</TableData>
          <TableData>Table data</TableData>
          <TableData>Table data</TableData>
          <TableData>
            <div className="flex items-center gap-2">
              <ImageButton
                color="white"
                bg="#1D4ED8"
                variant="fill"
                image={save}
                size="sm"
              >
                Edit
              </ImageButton>
              <ImageButton
                color="white"
                bg="#D97706"
                variant="fill"
                image={save}
                size="sm"
              >
                Delete
              </ImageButton>
            </div>
          </TableData>
        </TableRow>
      </TableBody>
    </table>
  );
};
export default Table;
