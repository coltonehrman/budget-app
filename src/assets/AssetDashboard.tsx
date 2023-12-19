import {
  AccountBalance,
  DeleteForeverRounded,
  Edit,
  House,
  MoneyRounded,
} from "@mui/icons-material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CircularProgress from "@mui/joy/CircularProgress";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useEffect, useState } from "react";
import AssetModal from "./asset-modal/AssetModal";
import {
  assetLoader,
  type Asset,
  editAssetItem,
  deleteAssetItem,
} from "./asset";

export default function AssetDashboard(): JSX.Element {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<number | null>(null);

  useEffect(() => {
    setAssets(assetLoader.load(assets));
  }, []);

  const onEditItem = useCallback(
    (index: number, editedAsset: Asset) => {
      const newAssets = editAssetItem(assets, index, editedAsset);
      setAssets(newAssets);
      assetLoader.save(newAssets);
    },
    [assets, setAssets],
  );

  const onDeleteAsset = useCallback(
    (index: number) => {
      const newAssets = deleteAssetItem(assets, index);
      setAssets(newAssets);
      assetLoader.save(newAssets);
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

      {editItem != null && (
        <AssetModal
          title="Edit Account"
          open={editItem !== null}
          initialState={assets[editItem]}
          setOpen={(open) => {
            if (open === false) setEditItem(null);
          }}
          onSubmit={(edits) => {
            onEditItem(editItem, edits);
            setEditItem(null);
          }}
        />
      )}

      <AssetModal
        title="Add Asset"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        onSubmit={(asset) => {
          const newAssets = [...assets, asset];
          setAssets(newAssets);
          setIsModalOpen(false);
          assetLoader.save(newAssets);
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
        <Box>
          <Card variant="soft" color="success" invertedColors>
            <CardContent>
              <Box>
                <AccountBalance />
              </Box>

              <Typography level="body-md">Networth</Typography>
              <Typography level="h2">
                ${" "}
                {new Intl.NumberFormat().format(
                  assets.reduce((net, ass) => net + ass.value, 0) -
                    assets.reduce((net, ass) => net + ass.debt, 0),
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card variant="soft" color="danger" invertedColors>
            <CardContent>
              <Box>
                <AccountBalance />
              </Box>

              <Typography level="body-md">Debt</Typography>
              <Typography level="h2">
                ${" "}
                {new Intl.NumberFormat().format(
                  -assets.reduce((net, ass) => net + ass.debt, 0),
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />

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
            <Card
              variant="soft"
              color={asset.type === "car" ? "warning" : "primary"}
              invertedColors
            >
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
                  <Box sx={{ ml: "auto" }}>
                    <IconButton
                      sx={{
                        marginRight: 1,
                      }}
                      variant="soft"
                      color="danger"
                      size="sm"
                      onClick={() => {
                        setEditItem(i);
                      }}
                    >
                      <Edit />
                    </IconButton>

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
                  </Box>

                  {asset.type === "house" && <House />}
                  <Typography level="body-md">{asset.name}</Typography>
                  <Typography level="h2">
                    $ {new Intl.NumberFormat().format(asset.value)}
                  </Typography>
                  <Typography level="h4">
                    $ -{new Intl.NumberFormat().format(asset.debt)}
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
}
