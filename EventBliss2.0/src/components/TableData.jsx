import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";

// eslint-disable-next-line react/prop-types
export function TableData({Title, HeaderCell = [], SelectData = [], Data = []}){
    return(
        <div>
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {Title}
            </h3>
            <Table className="mt-5 h-96">
                <TableHead className="mw-[100%] justify-center sticky top-0 bg-white">
                    <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
                        {HeaderCell.map((header, index) => (
                            <TableHeaderCell key={index} className="font-bold text-black">{header}</TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Data.map((item, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {SelectData.map((ItemSelectData, SelectDataIndex) => (
                                <TableCell key={SelectDataIndex} className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                    {item[ItemSelectData]}
                                </TableCell>
                            ))}
                        </TableRow>  
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
