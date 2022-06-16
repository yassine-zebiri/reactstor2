import './index.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button, IconButton } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
export default function BoxLeft(){
    return(
        <div className="admin-boxleft">
            <div className='admin-logo'>
                <h2>Laghouat Shop</h2>
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </div>



            <div className='admin-list'>
                <div >
                    <p>ADMIN</p>
                </div>
                <div className='admin-list-item'>
                    <Button startIcon={<DashboardIcon/>}>
                        <p>لوحة القيادة</p>
                    </Button>
                </div>
                <div className='admin-list-item'>
                    <Button>1</Button>
                </div>
                <div className='admin-list-item'>
                    <Accordion className=' admin-accordion'>
                        <Button style={{width:'100%',padding:0}} >
                            <AccordionSummary style={{width:'100%'}} expandIcon={<ArrowBackIosNewIcon/>}>
                                <Typography><Button disabled startIcon={<StoreIcon/>}>المنتجات</Button></Typography>
                            </AccordionSummary>
                        </Button>
                        <AccordionDetails>
                            <Button startIcon={<ArrowRightIcon/>}>قائمة المنتجات</Button>
                            <Button startIcon={<ArrowRightIcon/>}>اضافة منتج</Button>
                            <Button startIcon={<ArrowRightIcon/>}>الفئات</Button>
                        </AccordionDetails>
                    </Accordion>
                    
                </div>
                <div>1</div>
            </div>
        </div>
    )
}