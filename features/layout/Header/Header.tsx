import { Container } from "@/design-system/components/core/Container";
import { cn } from "@/design-system/utils/cn";
import { HeaderProps } from "./header.types";
import { branding, navigation } from "@/config/site";
import { Logo } from "@/design-system/components/navigation/Logo";
import { Navbar } from "@/design-system/components/navigation/Navbar";
import { Navigation } from "@/design-system/components/navigation/Navigation";
import { NavbarActions } from "@/design-system/components/navigation/NavbarActions";

export function Header({ className }: HeaderProps) {
  return (
          <header
            className={cn(
              "sticky top-0 z-50 w-full",
              "bg-background/60",
              "backdrop-blur-md",
              "shadow-sm",
              className
            )}
          >
            <Container>
              <Navbar
                logo={
                  <Logo href={branding.homeHref}>
                    <span className="text-lg font-semibold text-foreground">
                      {branding.name}
                    </span>
                  </Logo>
                }
                navigation={
                  <Navigation items={navigation} />
                }
                actions={
                  <NavbarActions>
                    {/* IconButtons próximamente */}
                  </NavbarActions>
                }
              />
      </Container>
    </header>
  );
}