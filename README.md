# Angular von 0 auf 100

## Abstract

Bereits in seiner ersten Version war Angular ein Tool mit dem man schnell flüssige Frontend-Applikationen erstellen konnte. Inzwischen ist nach einem Rewrite in Angular 2 schon die 6. Generation verfügbar. Nun kann man mit Angular nicht nur komplette Applikationen entwickeln, sondern es lohnt sich auch, wenn man einfach mal einen Prototyp umsetzen will.
In dem Vortrag nehme ich das Publikum mit auf eine Reise von einer blanken Skeleton App bis hin zu einer fertigen Anwendung. Das heißt wir werden ausgehend von einer kleinen Intro eine ganze Applikation zusammen bauen.
Um bei einem gleichen Stand und in gleicher Umgebung starten zu können habe ich uns einen Docker-Container zusammen gebaut. Das heißt, das einzig notwendige Tool für den Start wäre `docker`.
Was wollen wir bauen? Habt ihr Vorschläge für eine kleine App, die wir umsetzen wollten? Dann her damit tragt sie einfach im vorbereteten [Ticket](https://gitlab.com/ElectricMaxxx/code-talks-angular-hack/issues/1) ein oder votet für andere Vorschläge. Einsendeschluss ist Donnerstag Abend 00:00.


# Die App

## Clone repository

```bash
# repository and angular cli
$ git clone git@gitlab.com:ElectricMaxxx/code-talks-angular-hack.git
$ cd code-talks-anagular-hack
$ npm install
$ npm install @angular/cli
$ ng serve -o

```

#OR

```bash
# container usage
$ mkdir app
$ docker run -p 4201:4200 -d -v /absolute/path/to/app/:/usr/src/app/ registry.gitlab.com/electricmaxxx/code-talks-angular-hack:latest
```

# Die App - CfP for CodeTalks Speakers

1
> As a Speaker i would like to enter my speaker data once, to propose my talk abstracts.

2
> As a Speaker i would like enter my talk related data to get a speaker slot at codetalks

3
> As a organizer of codetalks i would like to see all proposed talks in a list.

4
> As a curator of a codetalks tracks i would like to vote on an abstract, to get it into my track or not
