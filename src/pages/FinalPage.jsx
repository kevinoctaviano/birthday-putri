import { Box, Container, Paper, Typography } from "@mui/material";
import { ReactFloatingBalloons } from "react-floating-balloons";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import CoupleIcon from "../assets/couple.png"; // Assuming you have an icon
import ReactHowler from "react-howler";
import Music from "../assets/Serta Mulia-Sal Priadi (Lyrics).mp3";

export default function FinalPage() {
  const { width, height } = useWindowSize();

  return (
    <Container maxWidth="sm">
      <Confetti width={width} height={height} />

      <ReactHowler src={Music} playing={true} loop />

      <ReactFloatingBalloons
        count={8}
        msgText="Happy Birthday!!"
        popVolumeLevel={0.1}
      />
      <Paper
        elevation={6}
        sx={{ p: 4, borderRadius: 4, positioin: "relative", zIndex: 999 }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mt: 4,
            position: "relative",
            fontWeight: "bold",
            color: "#f44336",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Happy Birthday, Sayangku! 🎉
        </Typography>

        <Box
          sx={{
            mb: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={CoupleIcon}
            alt="Icon"
            style={{
              width: 150,
              height: 200,
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mt: 4,
            position: "relative",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Happy 26th Birthday to My Beloved Person! 🎂❤️
        </Typography>

        <Typography variant="h6" textAlign="justify" mt={2}>
          Semoga segala yang kamu cita-citakan tercapai, segala yang kamu
          impikan terwujud, dan segala yang kamu inginkan menjadi kenyataan.
          Semoga Allah lancarkan segala hajat dan keinginanmu di umur sekarang.
          Semoga sukses di karir dan pendidikanmu❤️
        </Typography>
        <Typography variant="h6" textAlign="justify" mt={2}>
          Maaf yaa kalau hadiahnya belum sesuai harapanmu atau terlalu
          sederhana.. Aku mengusahakan yang terbaik untukmu.. Maaf jugaa belum
          bisa beliin kamu bunga yang kamu mau yaa Aku harap aku bisa kasih kamu
          yang lebih baik lagi di tahun-tahun berikutnya😊❤️ Terima kasih sudah
          menjadi bagian dari cerita hidupku
        </Typography>
        <Typography variant="h6" textAlign="justify" mt={2}>
          Sincerely yours, Kevin❤️
        </Typography>
      </Paper>
    </Container>
  );
}
