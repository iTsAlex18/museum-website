import { BannerContainer, BannerContent } from "../components/Layout/Banner";
import { AddressContainer, AddressContent } from "../components/Layout/addres";
import { Typography, Box } from "@mui/material";
import Layout from "./../components/Layout/Layout";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../styles/HorarioStyles.css'

function createData(name, hora, name2, precio) {
    return { name, hora, name2, precio};
}

const rows = [
    createData('Lunes', 'Cerrado'),
    createData('Martes', 'Cerrado'),
    createData('Miercoles', '9:00 AM to 17:00 PM'),
    createData('Jueves', '9:00 AM to 17:00 PM'),
    createData('Viernes', '9:00 AM to 17:00 PM'),
    createData('Sabado', '9:00 AM to 17:00 PM'),
    createData('Domingo', '9:00 AM to 17:00 PM'),
];

export default function BasicTable() {
    return (
      <Layout>
        <br/>
        <BannerContainer style={{ marginTop: '20px', borderRadius: '15px' }}>
            <BannerContent>
            <Box sx={{
              m: 3,
              width: "600px",
              "@media (max-width:600px)": {
                width: "300px",
              },
            }}
            >
                <TableContainer >
                    <Typography variant="h4" style={{textAlign:"center"}}>Abrimos</Typography>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" >{row.hora}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <br/>
                    <Typography variant="h4" style={{textAlign:"center"}}>Precio del boleto</Typography>
                    <Table sx={{ minWidth: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow 
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">Adultos</TableCell>
                                    <TableCell align="right" >$20.00</TableCell>
                                    <TableCell component="th">Niños</TableCell>
                                    <TableCell align="right">$10.00</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Box>
            </BannerContent>
        </BannerContainer>

        <AddressContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
          <div className="container-md">
          <AddressContent>
                <Typography variant="h4" style={{color:"white"}}>Direccion:</Typography>
                <iframe className="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.5613337158898!2d-110.30630508952392!3d30.98272157435809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d0e18a63fb3753%3A0x148763da181ecd77!2sMuseo%20%22La%20Carcel%20de%20Cananea%22!5e0!3m2!1sen!2smx!4v1686852172940!5m2!1sen!2smx" width="950" height="450" margin-right="auto"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </AddressContent>
          </div>
        </AddressContainer>
        </Layout>
    );
}




