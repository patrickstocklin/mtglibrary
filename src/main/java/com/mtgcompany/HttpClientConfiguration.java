package com.mtgcompany;

import com.mtgcompany.client.ScryfallClient;
import feign.Feign;
import feign.Logger;
import feign.gson.GsonDecoder;
import feign.gson.GsonEncoder;
import feign.okhttp.OkHttpClient;
import feign.slf4j.Slf4jLogger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HttpClientConfiguration {

    private final String SCRYFALL_ADDRESS = "https://api.scryfall.com";

    @Bean
    public ScryfallClient scryfallClient() {
        ScryfallClient client = Feign.builder()
                .client(new OkHttpClient())
                .encoder(new GsonEncoder())
                .decoder(new GsonDecoder())
                .logger(new Slf4jLogger(ScryfallClient.class))
                .logLevel(Logger.Level.FULL)
                .target(ScryfallClient.class, SCRYFALL_ADDRESS);
        return client;
    }
}
