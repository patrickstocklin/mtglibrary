FROM ubuntu:14.04
RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y curl && \
  apt-get install -y  software-properties-common && \
  add-apt-repository ppa:webupd8team/java -y && \
  apt-get update && \
  echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
  apt-get install -y oracle-java8-installer && \
  apt-get clean

RUN \
  curl -sL https://deb.nodesource.com/setup_10.x | sudo bash - && \
  apt-get install -y nodejs

RUN \
  npm install react-scripts && \
  npm install axios

# Set environment variables.
RUN mkdir /root/app
RUN mkdir /root/webapp
ENV HOME /root/app
# Define working directory.
WORKDIR /root/app

# Port Opening
#EXPOSE 8080
EXPOSE 3000

COPY ./target/mtglibrary-1.0-SNAPSHOT.jar app.jar
COPY ./src/main/webapp/ /root/webapp/
COPY ./deploy/start_server.sh start_server.sh

# Define default command.
#CMD ["java", "-jar", "app.jar"]
#CMD ["bash", "start_server.sh"]
CMD ["bash"]