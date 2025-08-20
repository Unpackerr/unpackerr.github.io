---
id: truenas-scale
title: TrueNAS Scale
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on TrueNAS Scale using TrueCharts.
---

# TrueNAS Scale Install

## TrueCharts

## Portainer

On TrueNAS Scale ElectricEel and later the use of docker containers is supported. To simplify installation, install a container manager such as Portainer or Dockge from the inbuilt application catalogue. This guide is based on the usage of Portainer.
![Portainer App Install](438751966-5e05d82c-7202-454b-a642-c120d86a5439.png)
![Portainer UI Open](438751972-c988a742-fd4f-4b95-b465-d58c108e785d.png)

Generate the contents of docker-compose.yml via [Notifiarr/Unpackerr](https://notifiarr.com/unpackerr) or write this yourself.

In Portainer, navigate to stacks, and add a new stack.
![Portainer Instance](438751979-fbc398b6-f0f2-4422-bf62-1c6a9d04b978.png)
![Stacks Section](438751985-b761fda1-793a-4ff3-a387-91084b406af2.png)

Name it 'unpackerr' and paste the contents of your previously created docker-compose.yml
![Stacks List](438751991-89cdbc39-9b7a-458e-8464-d29f0236d288.png)
![Create Unpackerr Stack](438751996-479f01b6-dc98-472a-8cf1-eafb40b4925a.png)

Ensure the details are correct for your TrueNAS instance (i.e. the relevant directory is mapped and the user/group IDs are correct) and then create the stack.
![Deploy Stack](438751935-3cd78746-c0e1-4761-a163-05df93202f4c.png)

Portainer will do everything from here. Once done, to confirm it is working open the unpackerr stack and review the logs. You should see any pending files for connected applications being extracted.
![Log View](438751959-0dbedfb9-626c-44ce-910f-14ebfaeaa0d6.png)

## TrueNAS Custom App

There may be a way to install unpackerr directly without the use of a container manager. 
If you work that out, please [edit this page](https://github.com/Unpackerr/unpackerr.github.io/blob/main/docs/install/truenas-scale.md) 
so others can benefit from your tribulations.