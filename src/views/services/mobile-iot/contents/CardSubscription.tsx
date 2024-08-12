import Application from "@/@core/components/icons/Application";
import Chip from "@/@core/components/icons/Chip";
import Distributive from "@/@core/components/icons/Distributive";
import Instruction from "@/@core/components/icons/Instruction";
import Production from "@/@core/components/icons/Production";
import CardText2 from "@/views/assets/components/cards/CardText2";
import { Grid, Theme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const CardSubscription = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { i18n } = useTranslation();

  const spacing = useMemo(() => {
    if (isDesktop) return 5.5;

    if (isTablet) return 5;

    return 5;
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md>
        <CardText2
          eleIcon={<Instruction />}
          height={isMobile ? "fit-content !important" : "350px"}
          label={"기획 - 디자인"}
          width={"190px"}
          ctxStyles={{ paddingTop: "2rem" }}
          elementDesk={
            <>
              제품 기획 <br />
              기구설계.디자인 <br />
              목업 제작
              <br />
              3D 모델링 <br />
              상용화 전략 수립
            </>
          }
          elementMobile={
            <>
              제품 기획 <br />
              기구설계.디자인 <br />
              목업 제작
              <br />
              3D 모델링 <br />
              상용화 전략 수립
            </>
          }
        />
      </Grid>
      <Grid item xs={12} md={2.4}>
        <CardText2
          eleIcon={<Chip />}
          height={isMobile ? "fit-content !important" : "350px"}
          label="H/W 개발"
          width={"190px"}
          ctxStyles={{ paddingTop: "2rem" }}
          elementDesk={
            <>
              회로 설계 <br /> 무선통신 <br /> 펌웨어 개발
            </>
          }
          elementMobile={
            <>
              회로 설계 <br /> 무선통신 <br /> 펌웨어 개발
            </>
          }
        />
      </Grid>
      <Grid item xs={12} md={2.4}>
        <CardText2
          eleIcon={<Application />}
          height={isMobile ? "fit-content !important" : "350px"}
          label="S/W 개발"
          width={"190px"}
          ctxStyles={{ paddingTop: "2rem" }}
          elementDesk={
            <>미들웨어 개발 Windows Linux Embedded Linux Android Application</>
          }
          elementMobile={
            <>미들웨어 개발 Windows Linux Embedded Linux Android Application</>
          }
        />
      </Grid>
      <Grid item xs={12} md={2.4}>
        <CardText2
          eleIcon={<Production />}
          height={isMobile ? "fit-content !important" : "350px"}
          label="생산 - 시공"
          width={"190px"}
          ctxStyles={{ paddingTop: "2rem" }}
          elementDesk={
            <>
              구매 <br /> 생산 <br /> 설치공사
            </>
          }
          elementMobile={
            <>
              구매 <br /> 생산 <br /> 설치공사
            </>
          }
        />
      </Grid>
      <Grid item xs={12} md>
        <CardText2
          eleIcon={<Distributive />}
          height={isMobile ? "fit-content !important" : "350px"}
          label="제품 유통"
          width={"190px"}
          ctxStyles={{ paddingTop: "2rem" }}
          elementDesk={
            <>
              각종 랙<br /> IT 장비
            </>
          }
          elementMobile={
            <>
              각종 랙<br /> IT 장비
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default CardSubscription;
