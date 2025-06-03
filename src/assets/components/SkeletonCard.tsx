import { Card, CardBody, SkeletonText } from "@chakra-ui/react";

type Props = {};

function SkeletonCard({}: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody gap="2">
        <SkeletonText noOfLines={1} mt="1" spacing="1" skeletonHeight="220" />
        <SkeletonText noOfLines={2} mt="1" spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
}

export default SkeletonCard;
