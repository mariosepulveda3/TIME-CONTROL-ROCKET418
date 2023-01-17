import React, { useState } from "react";
import {
  Flex,
  //   Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiCalendar,
  FiUser,
  FiEdit,
  FiBriefcase,
  FiClock,
  FiFileText,
} from "react-icons/fi";
import { IoPeopleOutline, IoRocketOutline } from "react-icons/io5";
import NavItem from "../components/NavItem";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");

  return (
    <Flex
      pos="sticky"
      left="10"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "75px" : "350px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <Link to="/">
          <NavItem
            navSize={navSize}
            icon={IoRocketOutline}
            title="Rocket 418"
          />
        </Link>
        <Link to="/control">
          <NavItem navSize={navSize} icon={FiClock} title="Control Horas" />
        </Link>
        <Link to="/projects">
          <NavItem navSize={navSize} icon={FiBriefcase} title="Proyectos" />
        </Link>
        <Link to="/teams">
          <NavItem navSize={navSize} icon={IoPeopleOutline} title="Equipos" />
        </Link>
        <Link to="/tasks">
          <NavItem navSize={navSize} icon={FiFileText} title="Tareas" />
        </Link>
        <Link to="/notes">
          <NavItem navSize={navSize} icon={FiEdit} title="Notas" />
        </Link>
        <Link to="/calendary">
          <NavItem navSize={navSize} icon={FiCalendar} title="Calendario" />
        </Link>
        <Link to="/count">
          <NavItem navSize={navSize} icon={FiUser} title="Cuenta" />
        </Link>
        <Link to="/signup">
          <NavItem navSize={navSize} icon={FiUser} title="Registro" />
        </Link>
        <Link to="/login">
          <NavItem navSize={navSize} icon={FiUser} title="Inicio de sesión" />
        </Link>
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={5}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Mario Sepúlveda
            </Heading>
            {/* <Text color="gray">Admin</Text> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
