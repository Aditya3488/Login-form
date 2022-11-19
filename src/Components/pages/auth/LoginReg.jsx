import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import Image from "../../../../../Image.png";
import { useState } from "react";
import UserLogin from "./UserLogin";
import Registration from "./Registration";
import CodeIcon from "@mui/icons-material/Code";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = (props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", sm: "block" }
          }}
        ></Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ mx: 3, height: 530 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}
                >
                  <Tab
                    label="login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
                <TabPanel value={value} index={0}>
                  <UserLogin />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Registration />
                </TabPanel>
              </Box>
            </Box>
            <Box textAlign="center" sx={{ mt: 2 }}>
              <CodeIcon sx={{ color: "blue", fontSize: 100 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                DIGIKULL
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default LoginReg;
