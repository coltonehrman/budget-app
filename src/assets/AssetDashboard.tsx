import { DeleteForeverRounded, House, MoneyRounded } from "@mui/icons-material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CircularProgress from "@mui/joy/CircularProgress";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useEffect, useState } from "react";
import AssetModal from "./asset-modal/AssetModal";

export interface Asset {
  name: string;
  type: string;
  value: number;
  debt: number;
}

export default function AssetDashboard(): JSX.Element {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (assets.length === 0) {
      const storedItems = localStorage.getItem("assets");

      if (storedItems !== null) {
        const parsedStoredItems = JSON.parse(storedItems) as Asset[];
        setAssets(parsedStoredItems);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("assets", JSON.stringify(assets));
  }, [assets]);

  const onDeleteAsset = useCallback(
    (index: number) => {
      assets.splice(index, 1);
      setAssets([...assets]);
    },
    [assets, setAssets],
  );

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="small" />}
          sx={{ pl: 0 }}
        >
          <Link underline="none" color="neutral" aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            fontSize={12}
            fontWeight={500}
          >
            Dashboard
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Assets
          </Typography>
        </Breadcrumbs>
      </Box>
      <Typography level="h2" component="h1">
        Assets
      </Typography>

      <Box>
        <Button
          size="sm"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add new
        </Button>
      </Box>

      <AssetModal
        title="Add Asset"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        onSubmit={(asset) => {
          setAssets([...assets, asset]);
          setIsModalOpen(false);
        }}
      />

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        {assets.map((asset, i) => (
          <Box key={i}>
            <Card variant="soft" color="success" invertedColors>
              <CardContent orientation="horizontal">
                <CircularProgress
                  size="lg"
                  determinate
                  value={Math.max(
                    ((asset.value - asset.debt) / asset.value) * 100,
                    0,
                  )}
                >
                  <SvgIcon>
                    <MoneyRounded />
                  </SvgIcon>
                </CircularProgress>
                <CardContent>
                  <IconButton
                    variant="soft"
                    color="danger"
                    size="sm"
                    sx={{ ml: "auto" }}
                    onClick={() => {
                      onDeleteAsset(i);
                    }}
                  >
                    <DeleteForeverRounded />
                  </IconButton>
                  {asset.type === "house" && <House />}
                  <Typography level="body-md">{asset.name}</Typography>
                  <Typography level="h2">$ {asset.value}</Typography>
                  <Typography level="h4">$ -{asset.debt}</Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
}
