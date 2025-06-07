import Box from "@mui/material/Box";
import useStore from "../../services/useAppStore";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const MyPackagePeotv = () => {
  const { serviceDetails, setLeftMenuItem, selectedNavbarItem } = useStore();
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (serviceDetails!.listofPEOService.length == 0) {
      setShowAlert(true);
    }
  }, [serviceDetails, selectedNavbarItem]);
  return (
    <>
      <Dialog open={showAlert} onClose={() => setShowAlert(false)}>
        <DialogTitle>
          <Typography
            variant="body2"
            sx={{ fontSize: "24px", color: "#00256A" }}
          >
            No PEO TV Connection
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography
            variant="body2"
            sx={{ fontSize: "16px", color: "#0056A2" }}
          >
            Seems like you don't have a PEO TV connection. Let's request one!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: "#fff",
              color: "#00256A",
              "&:hover": {
                backgroundColor: "#00256A",
                color: "#ffffff",
              },
            }}
            onClick={() => {
              setShowAlert(false);
            }}
            color="primary"
          >
            Close
          </Button>
          <Button
            sx={{
              backgroundColor: "#fff",
              color: "#00256A",
              "&:hover": {
                backgroundColor: "#00256A",
                color: "#ffffff",
              },
            }}
            onClick={() => {
              setShowAlert(false);
              setLeftMenuItem("New Services");
            }}
            color="primary"
            autoFocus
          >
            Request Now
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          gap: 2,
          flexDirection: "column",
          backgroundColor: "#1B1D41",
          color: "#FFFFFF1A",
          padding: 1,
          borderRadius: "10px",
          height: "65vh",
          }}
      >
        <Box
          sx={{
            margin: "auto",
            background: "linear-gradient(to right, rgba(0, 104, 177, 0.3) 0%, rgba(0, 44, 75, 0.5) 100%)",
            border: "1px solid", // Add this
            borderColor: "#FFFFFF88",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            width: "60%",
            height: "60%",
          }}
        >
          {serviceDetails?.listofPEOService &&
          serviceDetails?.listofPEOService.length > 0 ? (
            <>
              <Typography
                variant="body2"
                sx={{ color: "#FFF", fontSize: "20px", fontWeight: 600, mb: 4 }}
              >
                {`Service ID : ${serviceDetails?.listofPEOService[0].serviceID}`}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFF", fontSize: "36px", fontWeight: 600, mb: 3 }}
              >
                {`${serviceDetails?.listofPEOService[0].packageName}`}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFF", fontSize: "22px", }}
              >
                {`Status  `}
                <Typography
                  variant="body2"
                  component={"span"}
                  sx={{ color: "#8BCA84", fontSize: "22px", fontWeight: 600 }}
                >
                  •{serviceDetails?.listofPEOService[0].serviceStatus}
                </Typography>
              </Typography>
            </>
          ) : (
            <Typography
              variant="body2"
              sx={{
                color: "#FFF",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              No Data to Show
            </Typography>
          )}
        </Box>
        
      </Box>
    </>
  );
};

export default MyPackagePeotv;
