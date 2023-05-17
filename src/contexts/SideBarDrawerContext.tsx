import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { ReactNode, createContext, useContext, useEffect } from "react";

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

export function SideBarDrawerProvider({
  children,
}: SideBarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useSearchParams();

  useEffect(() => {
    disclosure.onClose();
  }, [router.values]);

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext);
