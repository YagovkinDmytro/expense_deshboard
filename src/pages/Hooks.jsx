import Card from "@/components/Card";
import CustomButtonRef from "@/components/CustomButtonRef/CustomButtonRef";
import HookUseMemo from "@/components/HookUseMemo/HookUseMemo";
import HookUseRef from "@/components/HookUseRef/HookUseRef";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

const Hooks = () => {
  return (
    <>
      <Card text="Hook useMemo">
        <HookUseMemo />
      </Card>
      <Card text="Hook useRef">
        <HookUseRef />
      </Card>
      <Card text="Hook useRef + Player">
        <VideoPlayer />
      </Card>
      <Card text="CustomButtonRef">
        <CustomButtonRef />
      </Card>
    </>
  );
};

export default Hooks;
